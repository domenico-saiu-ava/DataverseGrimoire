---
logical: "msdyn_iotalert"
display: "IoT Alert"
entitySetName: "msdyn_iotalerts"
primaryId: "msdyn_iotalertid"
primaryName: "msdyn_description"
tableType: "Standard"
ownership: "UserOwned"
---

# IoT Alert

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_iotalert` |
| Display name | IoT Alert |
| Display (plural) | IoT Alerts |
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

Writable: **28** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_AlertData`, `msdyn_alertpriorityscore`, `msdyn_AlertTime`, `msdyn_AlertToken`, `msdyn_alerttype`, `msdyn_AlertURL`, `msdyn_case`, `msdyn_CustomerAsset`, `msdyn_Description`, `msdyn_Device`, `msdyn_DeviceID`, `msdyn_iotalertId`, `msdyn_LastCommandSent`, `msdyn_LastCommandSentTime`, `msdyn_ParentAlert`, `msdyn_ParentAlertToken`, `msdyn_suggestedpriority`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `processid`, `stageid`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `traversedpath`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_iotalert` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_iotalert_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_iotalert_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_iotalert_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_iotalert_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_incident_msdyn_iotalert_Case` | [incident](incident.md) | `msdyn_case` | `msdyn_Case` |
| `msdyn_iotalert_msdyn_iotalert` | [msdyn_iotalert](msdyn_iotalert.md) | `msdyn_parentalert` | `msdyn_ParentAlert` |
| `msdyn_msdyn_customerasset_msdyn_iotalert_CustomerAsset` | [msdyn_customerasset](msdyn_customerasset.md) | `msdyn_customerasset` | `msdyn_CustomerAsset` |
| `msdyn_msdyn_iotdevice_msdyn_iotalert_Device` | [msdyn_iotdevice](msdyn_iotdevice.md) | `msdyn_device` | `msdyn_Device` |
| `msdyn_msdyn_iotdevicecommand_msdyn_iotalert_LastCommandSent` | [msdyn_iotdevicecommand](msdyn_iotdevicecommand.md) | `msdyn_lastcommandsent` | `msdyn_LastCommandSent` |
| `owner_msdyn_iotalert` | [owner](owner.md) | `ownerid` | `ownerid` |
| `processstage_msdyn_iotalert` | [processstage](processstage.md) | `stageid` | `stageid` |
| `team_msdyn_iotalert` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_iotalert` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `bpf_msdyn_iotalert_msdyn_iottocaseprocess` | _n/a_ | `bpf_msdyn_iotalertid` | _n/a_ |
| `msdyn_iotalert_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_iotalert_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotalert_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotalert_connections1` | _n/a_ | `record1id` | _n/a_ |
| `msdyn_iotalert_connections2` | _n/a_ | `record2id` | _n/a_ |
| `msdyn_iotalert_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotalert_msdyn_iotalert` | _n/a_ | `msdyn_parentalert` | _n/a_ |
| `msdyn_iotalert_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_iotalert_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotalert_QueueItems` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_iotalert_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_msdyn_iotalert_incident_IoTAlert` | _n/a_ | `msdyn_iotalert` | _n/a_ |
| `msdyn_msdyn_iotalert_msdyn_iotdevicecommand_ParentAlert` | _n/a_ | `msdyn_parentalert` | _n/a_ |


## Source

Generated from [msdyn_iotalert.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_iotalert.md) on 2026-05-06.