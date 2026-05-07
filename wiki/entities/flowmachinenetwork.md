---
logical: "flowmachinenetwork"
display: "Flow Machine Network"
entitySetName: "flowmachinenetworks"
primaryId: "flowmachinenetworkid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Flow Machine Network

## Identity

| Property | Value |
| --- | --- |
| Logical name | `flowmachinenetwork` |
| Display name | Flow Machine Network |
| Display (plural) | Flow Machine Networks |
| Schema name | `flowmachinenetwork` |
| Entity set (Web API) | `flowmachinenetworks` |
| Primary id attribute | `flowmachinenetworkid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/flowmachinenetworks?$select=name&$top=10
GET /api/data/v9.2/flowmachinenetworks(<guid>)
POST /api/data/v9.2/flowmachinenetworks
PATCH /api/data/v9.2/flowmachinenetworks(<guid>)
DELETE /api/data/v9.2/flowmachinenetworks(<guid>)
```

## Attributes

Writable: **23** · Read-only: **18**

### Writable

`CredentialId`, `description`, `DomainName`, `DomainPassword`, `DomainUsername`, `flowmachinenetworkId`, `ImportSequenceNumber`, `IsCustomizable`, `name`, `NetworkMetadata`, `OrganizationalUnit`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `ProvisioningState`, `statecode`, `statuscode`, `statuserrormessage`, `subnet`, `SupportedScenario`, `TimeZoneRuleVersionNumber`, `type`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_flowmachinenetwork` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `credential_flowmachinenetwork` | [credential](credential.md) | `credentialid` | `CredentialId` |
| `environmentvariabledefinition_flowmachinenetwork_domainpassword` | [environmentvariabledefinition](environmentvariabledefinition.md) | `domainpassword` | `DomainPassword` |
| `environmentvariabledefinition_flowmachinenetwork_domainusername` | [environmentvariabledefinition](environmentvariabledefinition.md) | `domainusername` | `DomainUsername` |
| `lk_flowmachinenetwork_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_flowmachinenetwork_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_flowmachinenetwork_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_flowmachinenetwork_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_flowmachinenetwork` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_flowmachinenetwork` | [team](team.md) | `owningteam` | `owningteam` |
| `user_flowmachinenetwork` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `flowmachine_flowmachinenetwork` | _n/a_ | `flowmachinenetworkid` | _n/a_ |
| `flowmachinegroup_flowmachinenetwork` | _n/a_ | `flowmachinenetwork` | _n/a_ |
| `flowmachinenetwork_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `flowmachinenetwork_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `flowmachinenetwork_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `flowmachinenetwork_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `flowmachinenetwork_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `flowmachinenetwork_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `flowmachinenetwork_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `flowmachinenetwork_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [flowmachinenetwork.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/flowmachinenetwork.md) on 2026-05-06.