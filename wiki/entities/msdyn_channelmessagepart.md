---
logical: "msdyn_channelmessagepart"
display: "Channel Message Part"
entitySetName: "msdyn_channelmessageparts"
primaryId: "msdyn_channelmessagepartid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Channel Message Part

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_channelmessagepart` |
| Display name | Channel Message Part |
| Display (plural) | Channel Message Parts |
| Schema name | `msdyn_ChannelMessagePart` |
| Entity set (Web API) | `msdyn_channelmessageparts` |
| Primary id attribute | `msdyn_channelmessagepartid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_channelmessageparts?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_channelmessageparts(<guid>)
POST /api/data/v9.2/msdyn_channelmessageparts
PATCH /api/data/v9.2/msdyn_channelmessageparts(<guid>)
DELETE /api/data/v9.2/msdyn_channelmessageparts(<guid>)
```

## Attributes

Writable: **23** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_ChannelDefinitionId`, `msdyn_ChannelMessagePartId`, `msdyn_Description`, `msdyn_DisplayName`, `msdyn_EntityName`, `msdyn_EntityViewId`, `msdyn_IsRequired`, `msdyn_MaxLength`, `msdyn_MaxValue`, `msdyn_MinValue`, `msdyn_Name`, `msdyn_Options`, `msdyn_Order`, `msdyn_Type`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_channelmessagepart` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_channelmessagepart_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_channelmessagepart_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_channelmessagepart_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_channelmessagepart_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_channelmessagepart_ChannelDefinition_msdyn` | [msdyn_channeldefinition](msdyn_channeldefinition.md) | `msdyn_channeldefinitionid` | `msdyn_ChannelDefinitionId` |
| `owner_msdyn_channelmessagepart` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_channelmessagepart` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_channelmessagepart` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_channelmessagepart_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_channelmessagepart_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_channelmessagepart_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_channelmessagepart_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_channelmessagepart_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_channelmessagepart_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_channelmessagepart_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_channelmessagepart_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_channelmessagepart.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_channelmessagepart.md) on 2026-05-06.