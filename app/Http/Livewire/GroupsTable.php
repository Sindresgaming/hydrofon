<?php

namespace Hydrofon\Http\Livewire;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class GroupsTable extends BaseTable
{
    use AuthorizesRequests;

    protected $model = \Hydrofon\Group::class;

    public function onSave()
    {
        $item = $this->items->find($this->editValues['id']);

        $this->authorize('update', $item);

        $validatedData = $this->validate([
            'editValues.name' => ['required'],
        ]);

        $item->update($validatedData['editValues']);

        $this->refreshItems([$item->id]);
        $this->isEditing = false;
    }

    public function render()
    {
        return view('livewire.groups-table', [
            'items' => $this->items,
        ]);
    }
}