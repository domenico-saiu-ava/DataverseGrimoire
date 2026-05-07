---
logical: "flowmachinenetwork"
display: "Rete del computer del flusso"
entitySetName: "flowmachinenetworks"
primaryId: "flowmachinenetworkid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Rete del computer del flusso

## Identity

| Property | Value |
| --- | --- |
| Logical name | `flowmachinenetwork` |
| Display name | Rete del computer del flusso |
| Display (plural) | Reti del computer del flusso |
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

Writable: **22** · Read-only: **16**

### Writable

`credentialid`, `description`, `domainname`, `domainpassword`, `domainusername`, `flowmachinenetworkid`, `importsequencenumber`, `iscustomizable`, `name`, `networkmetadata`, `organizationalunit`, `overriddencreatedon`, `ownerid`, `provisioningstate`, `statecode`, `statuscode`, `statuserrormessage`, `subnet`, `supportedscenario`, `timezoneruleversionnumber`, `type`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_flowmachinenetwork_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_flowmachinenetwork_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_flowmachinenetwork_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_flowmachinenetwork_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_flowmachinenetwork` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_flowmachinenetwork` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_flowmachinenetwork` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_flowmachinenetwork` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `credential_flowmachinenetwork` | [credential](credential.md) | `credentialid` | `CredentialId` |
| `environmentvariabledefinition_flowmachinenetwork_domainpassword` | [environmentvariabledefinition](environmentvariabledefinition.md) | `domainpassword` | `DomainPassword` |
| `environmentvariabledefinition_flowmachinenetwork_domainusername` | [environmentvariabledefinition](environmentvariabledefinition.md) | `domainusername` | `DomainUsername` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `flowmachinenetwork_SyncErrors` | [flowmachinenetwork](flowmachinenetwork.md) | `regardingobjectid` | `regardingobjectid_flowmachinenetwork` |
| `flowmachinenetwork_DuplicateMatchingRecord` | [flowmachinenetwork](flowmachinenetwork.md) | `duplicaterecordid` | `duplicaterecordid_flowmachinenetwork` |
| `flowmachinenetwork_DuplicateBaseRecord` | [flowmachinenetwork](flowmachinenetwork.md) | `baserecordid` | `baserecordid_flowmachinenetwork` |
| `flowmachinenetwork_AsyncOperations` | [flowmachinenetwork](flowmachinenetwork.md) | `regardingobjectid` | `regardingobjectid_flowmachinenetwork` |
| `flowmachinenetwork_MailboxTrackingFolders` | [flowmachinenetwork](flowmachinenetwork.md) | `regardingobjectid` | `regardingobjectid_flowmachinenetwork` |
| `flowmachinenetwork_UserEntityInstanceDatas` | [flowmachinenetwork](flowmachinenetwork.md) | `objectid` | `objectid_flowmachinenetwork` |
| `flowmachinenetwork_ProcessSession` | [flowmachinenetwork](flowmachinenetwork.md) | `regardingobjectid` | `regardingobjectid_flowmachinenetwork` |
| `flowmachinenetwork_BulkDeleteFailures` | [flowmachinenetwork](flowmachinenetwork.md) | `regardingobjectid` | `regardingobjectid_flowmachinenetwork` |
| `flowmachinenetwork_PrincipalObjectAttributeAccesses` | [flowmachinenetwork](flowmachinenetwork.md) | `objectid` | `objectid_flowmachinenetwork` |
| `flowmachinegroup_flowmachinenetwork` | [flowmachinenetwork](flowmachinenetwork.md) | `flowmachinenetwork` | `flowmachinenetwork` |
| `flowmachine_flowmachinenetwork` | [flowmachinenetwork](flowmachinenetwork.md) | `flowmachinenetworkid` | `FlowMachineNetworkId` |


## Source

Generated from [flowmachinenetwork (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='flowmachinenetwork')) on 2026-05-07.