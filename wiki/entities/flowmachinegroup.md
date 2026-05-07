---
logical: "flowmachinegroup"
display: "Flow Machine Group"
entitySetName: "flowmachinegroups"
primaryId: "flowmachinegroupid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Flow Machine Group

## Identity

| Property | Value |
| --- | --- |
| Logical name | `flowmachinegroup` |
| Display name | Flow Machine Group |
| Display (plural) | Flow Machine Groups |
| Schema name | `flowmachinegroup` |
| Entity set (Web API) | `flowmachinegroups` |
| Primary id attribute | `flowmachinegroupid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/flowmachinegroups?$select=name&$top=10
GET /api/data/v9.2/flowmachinegroups(<guid>)
POST /api/data/v9.2/flowmachinegroups
PATCH /api/data/v9.2/flowmachinegroups(<guid>)
DELETE /api/data/v9.2/flowmachinegroups(<guid>)
```

## Attributes

Writable: **36** · Read-only: **19**

### Writable

`Description`, `DisconnectionPlannedOn`, `DomainSetting`, `FlowGroupType`, `flowmachineimage`, `flowmachinenetwork`, `GroupMetadata`, `ImportSequenceNumber`, `IsCustomizable`, `KeyCreationDate`, `KeyExpiryGracePeriod`, `KeyValidityPeriod`, `LastRunDate`, `ManagedVersion`, `ManagementType`, `MaxManagedMachineCount`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PasswordChangedBy`, `PasswordChangedDate`, `PreferredQueuingType`, `PrimaryKeyPackage`, `PrimaryPublicKey`, `ProvisioningError`, `ProvisioningState`, `RotationStartedBy`, `SecondaryKeyPackage`, `SecondaryPublicKey`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `trytoreusewindowssession`, `UsageType`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `flowmachinegroupId`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_flowmachinegroup` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `flowmachinegroup_flowmachineimage` | [flowmachineimage](flowmachineimage.md) | `flowmachineimage` | `flowmachineimage` |
| `flowmachinegroup_flowmachinenetwork` | [flowmachinenetwork](flowmachinenetwork.md) | `flowmachinenetwork` | `flowmachinenetwork` |
| `flowmachinegroup_PasswordChangedBy` | [systemuser](systemuser.md) | `passwordchangedby` | `PasswordChangedBy` |
| `flowmachinegroup_RotationStartedBy` | [systemuser](systemuser.md) | `rotationstartedby` | `RotationStartedBy` |
| `lk_flowmachinegroup_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_flowmachinegroup_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_flowmachinegroup_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_flowmachinegroup_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_flowmachinegroup` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_flowmachinegroup` | [team](team.md) | `owningteam` | `owningteam` |
| `user_flowmachinegroup` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (15)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `flowcapacityassignment_flowmachinegroup` | _n/a_ | `regarding` | _n/a_ |
| `flowcredentialapplication_flowmachinegroup` | _n/a_ | `flowmachinegroupid` | _n/a_ |
| `flowevent_flowmachinegroup` | _n/a_ | `parentobjectid` | _n/a_ |
| `flowmachinegroup_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `flowmachinegroup_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `flowmachinegroup_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `flowmachinegroup_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `flowmachinegroup_flowlog_flowmachinegroupid` | _n/a_ | `flowmachinegroupid` | _n/a_ |
| `flowmachinegroup_flowlog_parentobjectid` | _n/a_ | `parentobjectid` | _n/a_ |
| `flowmachinegroup_flowmachine` | _n/a_ | `flowmachinegroupid` | _n/a_ |
| `flowmachinegroup_flowsession_MachineGroupId` | _n/a_ | `machinegroupid` | _n/a_ |
| `flowmachinegroup_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `flowmachinegroup_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `flowmachinegroup_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `flowmachinegroup_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [flowmachinegroup.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/flowmachinegroup.md) on 2026-05-06.