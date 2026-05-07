---
logical: "msdyn_iotalert"
display: "Avviso IoT"
entitySetName: "msdyn_iotalerts"
primaryId: "msdyn_iotalertid"
primaryName: "msdyn_description"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Avviso IoT

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_iotalert` |
| Display name | Avviso IoT |
| Display (plural) | Avvisi IoT |
| Schema name | `msdyn_iotalert` |
| Entity set (Web API) | `msdyn_iotalerts` |
| Primary id attribute | `msdyn_iotalertid` |
| Primary name attribute | `msdyn_description` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_iotalerts?$select=msdyn_description&$top=10
GET /api/data/v9.2/msdyn_iotalerts(<guid>)
POST /api/data/v9.2/msdyn_iotalerts
PATCH /api/data/v9.2/msdyn_iotalerts(<guid>)
DELETE /api/data/v9.2/msdyn_iotalerts(<guid>)
```

## Attributes

Writable: **27** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_alertdata`, `msdyn_alertpriorityscore`, `msdyn_alerttime`, `msdyn_alerttoken`, `msdyn_alerttype`, `msdyn_alerturl`, `msdyn_case`, `msdyn_customerasset`, `msdyn_description`, `msdyn_device`, `msdyn_deviceid`, `msdyn_iotalertid`, `msdyn_lastcommandsent`, `msdyn_lastcommandsenttime`, `msdyn_parentalert`, `msdyn_parentalerttoken`, `msdyn_suggestedpriority`, `overriddencreatedon`, `ownerid`, `processid`, `stageid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `traversedpath`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_customerasset_msdyn_iotalert_CustomerAsset` | [msdyn_customerasset](msdyn_customerasset.md) | `msdyn_customerasset` | `msdyn_CustomerAsset` |
| `msdyn_incident_msdyn_iotalert_Case` | [incident](incident.md) | `msdyn_case` | `msdyn_Case` |
| `lk_msdyn_iotalert_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_iotalert_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_iotalert_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_iotalert_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_iotalert` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_iotalert` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_iotalert` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_iotalert` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `processstage_msdyn_iotalert` | [processstage](processstage.md) | `stageid` | `stageid` |
| `msdyn_iotalert_msdyn_iotalert` | [msdyn_iotalert](msdyn_iotalert.md) | `msdyn_parentalert` | `msdyn_ParentAlert` |
| `msdyn_msdyn_iotdevice_msdyn_iotalert_Device` | [msdyn_iotdevice](msdyn_iotdevice.md) | `msdyn_device` | `msdyn_Device` |
| `msdyn_msdyn_iotdevicecommand_msdyn_iotalert_LastCommandSent` | [msdyn_iotdevicecommand](msdyn_iotdevicecommand.md) | `msdyn_lastcommandsent` | `msdyn_LastCommandSent` |

### One-to-Many (15)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_iotalert_incident_IoTAlert` | [msdyn_iotalert](msdyn_iotalert.md) | `msdyn_iotalert` | `msdyn_IoTAlert` |
| `bpf_msdyn_iotalert_msdyn_iottocaseprocess` | [msdyn_iotalert](msdyn_iotalert.md) | `bpf_msdyn_iotalertid` | `bpf_msdyn_iotalertid` |
| `msdyn_iotalert_SyncErrors` | [msdyn_iotalert](msdyn_iotalert.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotalert` |
| `msdyn_iotalert_AsyncOperations` | [msdyn_iotalert](msdyn_iotalert.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotalert` |
| `msdyn_iotalert_MailboxTrackingFolders` | [msdyn_iotalert](msdyn_iotalert.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotalert` |
| `msdyn_iotalert_UserEntityInstanceDatas` | [msdyn_iotalert](msdyn_iotalert.md) | `objectid` | `objectid_msdyn_iotalert` |
| `msdyn_iotalert_ProcessSession` | [msdyn_iotalert](msdyn_iotalert.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotalert` |
| `msdyn_iotalert_BulkDeleteFailures` | [msdyn_iotalert](msdyn_iotalert.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotalert` |
| `msdyn_iotalert_PrincipalObjectAttributeAccesses` | [msdyn_iotalert](msdyn_iotalert.md) | `objectid` | `objectid_msdyn_iotalert` |
| `msdyn_iotalert_connections1` | [msdyn_iotalert](msdyn_iotalert.md) | `record1id` | `record1id_msdyn_iotalert` |
| `msdyn_iotalert_connections2` | [msdyn_iotalert](msdyn_iotalert.md) | `record2id` | `record2id_msdyn_iotalert` |
| `msdyn_iotalert_QueueItems` | [msdyn_iotalert](msdyn_iotalert.md) | `objectid` | `objectid_msdyn_iotalert` |
| `msdyn_iotalert_Annotations` | [msdyn_iotalert](msdyn_iotalert.md) | `objectid` | `objectid_msdyn_iotalert` |
| `msdyn_iotalert_msdyn_iotalert` | [msdyn_iotalert](msdyn_iotalert.md) | `msdyn_parentalert` | `msdyn_ParentAlert` |
| `msdyn_msdyn_iotalert_msdyn_iotdevicecommand_ParentAlert` | [msdyn_iotalert](msdyn_iotalert.md) | `msdyn_parentalert` | `msdyn_ParentAlert` |


## Source

Generated from [msdyn_iotalert (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_iotalert')) on 2026-05-07.